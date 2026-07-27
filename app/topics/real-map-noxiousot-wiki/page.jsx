import RealMapNoxiousotWikiKeywordPage, { generateMetadata } from './real-map-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNoxiousotWikiKeywordPage />;
}
