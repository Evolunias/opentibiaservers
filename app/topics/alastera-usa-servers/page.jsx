import AlasteraUsaServersKeywordPage, { generateMetadata } from './alastera-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraUsaServersKeywordPage />;
}
