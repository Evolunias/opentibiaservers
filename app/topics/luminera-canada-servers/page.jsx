import LumineraCanadaServersKeywordPage, { generateMetadata } from './luminera-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCanadaServersKeywordPage />;
}
