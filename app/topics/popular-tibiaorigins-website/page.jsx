import PopularTibiaoriginsWebsiteKeywordPage, { generateMetadata } from './popular-tibiaorigins-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsWebsiteKeywordPage />;
}
