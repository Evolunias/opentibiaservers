import CurrentNoxiousotWikiKeywordPage, { generateMetadata } from './current-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotWikiKeywordPage />;
}
