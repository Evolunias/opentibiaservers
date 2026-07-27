import FreshStartCoxaotWebsiteKeywordPage, { generateMetadata } from './fresh-start-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotWebsiteKeywordPage />;
}
