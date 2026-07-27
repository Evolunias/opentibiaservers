import TopInfernalOtWebsiteKeywordPage, { generateMetadata } from './top-infernal-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtWebsiteKeywordPage />;
}
