import FreshStartThorniaWebsiteKeywordPage, { generateMetadata } from './fresh-start-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaWebsiteKeywordPage />;
}
