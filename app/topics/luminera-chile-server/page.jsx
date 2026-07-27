import LumineraChileServerKeywordPage, { generateMetadata } from './luminera-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraChileServerKeywordPage />;
}
