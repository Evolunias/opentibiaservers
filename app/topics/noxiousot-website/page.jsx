import NoxiousotWebsiteKeywordPage, { generateMetadata } from './noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotWebsiteKeywordPage />;
}
