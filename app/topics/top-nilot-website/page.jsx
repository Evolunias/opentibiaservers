import TopNilotWebsiteKeywordPage, { generateMetadata } from './top-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotWebsiteKeywordPage />;
}
