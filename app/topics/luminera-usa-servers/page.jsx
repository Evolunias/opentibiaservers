import LumineraUsaServersKeywordPage, { generateMetadata } from './luminera-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraUsaServersKeywordPage />;
}
