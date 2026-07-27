import TibijkaEuropeServerKeywordPage, { generateMetadata } from './tibijka-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEuropeServerKeywordPage />;
}
