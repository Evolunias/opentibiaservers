import LumineraArgentinaServersKeywordPage, { generateMetadata } from './luminera-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraArgentinaServersKeywordPage />;
}
