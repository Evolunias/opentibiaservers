import CustomArcaniarlLoginKeywordPage, { generateMetadata } from './custom-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlLoginKeywordPage />;
}
