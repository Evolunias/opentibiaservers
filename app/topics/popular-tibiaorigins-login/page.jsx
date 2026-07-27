import PopularTibiaoriginsLoginKeywordPage, { generateMetadata } from './popular-tibiaorigins-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsLoginKeywordPage />;
}
