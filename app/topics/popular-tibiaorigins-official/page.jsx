import PopularTibiaoriginsOfficialKeywordPage, { generateMetadata } from './popular-tibiaorigins-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsOfficialKeywordPage />;
}
