import TibiaraSwedenServersKeywordPage, { generateMetadata } from './tibiara-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSwedenServersKeywordPage />;
}
