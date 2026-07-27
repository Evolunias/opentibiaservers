import FreshStartLumineraKeywordPage, { generateMetadata } from './fresh-start-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraKeywordPage />;
}
