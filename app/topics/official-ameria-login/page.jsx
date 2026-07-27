import OfficialAmeriaLoginKeywordPage, { generateMetadata } from './official-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaLoginKeywordPage />;
}
