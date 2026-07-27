import OfficialAmeriaServerKeywordPage, { generateMetadata } from './official-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaServerKeywordPage />;
}
