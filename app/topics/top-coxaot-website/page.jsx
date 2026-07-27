import TopCoxaotWebsiteKeywordPage, { generateMetadata } from './top-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotWebsiteKeywordPage />;
}
