import NtoStarEuropeServerKeywordPage, { generateMetadata } from './nto-star-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEuropeServerKeywordPage />;
}
