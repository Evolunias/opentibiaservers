import PopularTibiaoriginsOtKeywordPage, { generateMetadata } from './popular-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsOtKeywordPage />;
}
