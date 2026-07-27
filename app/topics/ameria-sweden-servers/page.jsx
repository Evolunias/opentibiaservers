import AmeriaSwedenServersKeywordPage, { generateMetadata } from './ameria-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSwedenServersKeywordPage />;
}
