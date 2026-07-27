import TibiaraCanadaServersKeywordPage, { generateMetadata } from './tibiara-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCanadaServersKeywordPage />;
}
