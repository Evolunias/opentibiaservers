import TopAureraGlobalWebsiteKeywordPage, { generateMetadata } from './top-aurera-global-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalWebsiteKeywordPage />;
}
