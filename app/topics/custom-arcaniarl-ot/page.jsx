import CustomArcaniarlOtKeywordPage, { generateMetadata } from './custom-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlOtKeywordPage />;
}
