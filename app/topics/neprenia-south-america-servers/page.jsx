import NepreniaSouthAmericaServersKeywordPage, { generateMetadata } from './neprenia-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSouthAmericaServersKeywordPage />;
}
