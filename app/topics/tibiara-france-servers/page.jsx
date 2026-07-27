import TibiaraFranceServersKeywordPage, { generateMetadata } from './tibiara-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraFranceServersKeywordPage />;
}
