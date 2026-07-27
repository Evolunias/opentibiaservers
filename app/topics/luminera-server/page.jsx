import LumineraServerKeywordPage, { generateMetadata } from './luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraServerKeywordPage />;
}
