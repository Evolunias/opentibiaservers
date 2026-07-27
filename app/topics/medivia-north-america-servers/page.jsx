import MediviaNorthAmericaServersKeywordPage, { generateMetadata } from './medivia-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNorthAmericaServersKeywordPage />;
}
