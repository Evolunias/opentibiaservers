import PopularInfernalOtKeywordPage, { generateMetadata } from './popular-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtKeywordPage />;
}
