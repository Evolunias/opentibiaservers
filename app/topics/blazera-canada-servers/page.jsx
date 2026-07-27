import BlazeraCanadaServersKeywordPage, { generateMetadata } from './blazera-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCanadaServersKeywordPage />;
}
