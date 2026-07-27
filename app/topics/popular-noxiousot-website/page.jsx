import PopularNoxiousotWebsiteKeywordPage, { generateMetadata } from './popular-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotWebsiteKeywordPage />;
}
