import FreshStartTibiantisWebsiteKeywordPage, { generateMetadata } from './fresh-start-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisWebsiteKeywordPage />;
}
