import PopularInfernalOtWebsiteKeywordPage, { generateMetadata } from './popular-infernal-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtWebsiteKeywordPage />;
}
