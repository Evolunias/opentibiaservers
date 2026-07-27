import PopularTibiaoriginsGuideKeywordPage, { generateMetadata } from './popular-tibiaorigins-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsGuideKeywordPage />;
}
