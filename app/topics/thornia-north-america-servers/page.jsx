import ThorniaNorthAmericaServersKeywordPage, { generateMetadata } from './thornia-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaNorthAmericaServersKeywordPage />;
}
