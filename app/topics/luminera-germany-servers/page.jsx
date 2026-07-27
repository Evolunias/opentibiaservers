import LumineraGermanyServersKeywordPage, { generateMetadata } from './luminera-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraGermanyServersKeywordPage />;
}
