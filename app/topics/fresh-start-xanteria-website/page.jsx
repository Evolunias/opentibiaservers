import FreshStartXanteriaWebsiteKeywordPage, { generateMetadata } from './fresh-start-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaWebsiteKeywordPage />;
}
