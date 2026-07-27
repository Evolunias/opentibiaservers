import CurrentNoxiousotWebsiteKeywordPage, { generateMetadata } from './current-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotWebsiteKeywordPage />;
}
