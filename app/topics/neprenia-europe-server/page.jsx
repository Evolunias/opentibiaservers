import NepreniaEuropeServerKeywordPage, { generateMetadata } from './neprenia-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEuropeServerKeywordPage />;
}
