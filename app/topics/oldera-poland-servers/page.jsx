import OlderaPolandServersKeywordPage, { generateMetadata } from './oldera-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPolandServersKeywordPage />;
}
