import LumineraGermanyServerKeywordPage, { generateMetadata } from './luminera-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraGermanyServerKeywordPage />;
}
