import TopNoxiousotWebsiteKeywordPage, { generateMetadata } from './top-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotWebsiteKeywordPage />;
}
