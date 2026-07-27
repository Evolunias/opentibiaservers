import PopularInfernalOtOtsKeywordPage, { generateMetadata } from './popular-infernal-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtOtsKeywordPage />;
}
