import NepreniaEuropeServersKeywordPage, { generateMetadata } from './neprenia-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEuropeServersKeywordPage />;
}
