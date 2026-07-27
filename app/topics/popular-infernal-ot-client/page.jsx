import PopularInfernalOtClientKeywordPage, { generateMetadata } from './popular-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtClientKeywordPage />;
}
