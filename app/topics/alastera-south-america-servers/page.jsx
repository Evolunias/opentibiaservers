import AlasteraSouthAmericaServersKeywordPage, { generateMetadata } from './alastera-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSouthAmericaServersKeywordPage />;
}
