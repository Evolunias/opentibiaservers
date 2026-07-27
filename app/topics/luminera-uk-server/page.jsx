import LumineraUkServerKeywordPage, { generateMetadata } from './luminera-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraUkServerKeywordPage />;
}
