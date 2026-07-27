import LumineraPolandServersKeywordPage, { generateMetadata } from './luminera-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPolandServersKeywordPage />;
}
