import PopularInfernalOtLoginKeywordPage, { generateMetadata } from './popular-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtLoginKeywordPage />;
}
