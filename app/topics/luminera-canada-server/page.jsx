import LumineraCanadaServerKeywordPage, { generateMetadata } from './luminera-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCanadaServerKeywordPage />;
}
