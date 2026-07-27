import TibiaraUsaServersKeywordPage, { generateMetadata } from './tibiara-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraUsaServersKeywordPage />;
}
