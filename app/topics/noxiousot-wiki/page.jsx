import NoxiousotWikiKeywordPage, { generateMetadata } from './noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotWikiKeywordPage />;
}
