import TibiaraArgentinaServersKeywordPage, { generateMetadata } from './tibiara-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraArgentinaServersKeywordPage />;
}
