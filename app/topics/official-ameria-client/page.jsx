import OfficialAmeriaClientKeywordPage, { generateMetadata } from './official-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaClientKeywordPage />;
}
