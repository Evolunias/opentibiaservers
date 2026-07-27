import TibiantisEuropeServerKeywordPage, { generateMetadata } from './tibiantis-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisEuropeServerKeywordPage />;
}
