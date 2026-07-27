import TibiaraGermanyServersKeywordPage, { generateMetadata } from './tibiara-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraGermanyServersKeywordPage />;
}
