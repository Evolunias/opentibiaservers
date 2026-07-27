import CustomArcaniarlOfficialKeywordPage, { generateMetadata } from './custom-arcaniarl-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlOfficialKeywordPage />;
}
