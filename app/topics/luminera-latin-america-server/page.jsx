import LumineraLatinAmericaServerKeywordPage, { generateMetadata } from './luminera-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraLatinAmericaServerKeywordPage />;
}
