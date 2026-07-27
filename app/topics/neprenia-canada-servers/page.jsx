import NepreniaCanadaServersKeywordPage, { generateMetadata } from './neprenia-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaCanadaServersKeywordPage />;
}
