import NepreniaSwedenServersKeywordPage, { generateMetadata } from './neprenia-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSwedenServersKeywordPage />;
}
