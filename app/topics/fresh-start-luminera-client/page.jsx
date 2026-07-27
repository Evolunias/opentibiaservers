import FreshStartLumineraClientKeywordPage, { generateMetadata } from './fresh-start-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraClientKeywordPage />;
}
