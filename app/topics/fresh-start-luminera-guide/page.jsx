import FreshStartLumineraGuideKeywordPage, { generateMetadata } from './fresh-start-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraGuideKeywordPage />;
}
