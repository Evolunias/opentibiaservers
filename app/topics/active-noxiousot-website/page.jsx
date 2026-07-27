import ActiveNoxiousotWebsiteKeywordPage, { generateMetadata } from './active-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotWebsiteKeywordPage />;
}
