import FreshStartLumineraServerKeywordPage, { generateMetadata } from './fresh-start-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraServerKeywordPage />;
}
