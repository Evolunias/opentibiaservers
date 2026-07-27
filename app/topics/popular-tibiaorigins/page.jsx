import PopularTibiaoriginsKeywordPage, { generateMetadata } from './popular-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsKeywordPage />;
}
