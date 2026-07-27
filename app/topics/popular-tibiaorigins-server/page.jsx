import PopularTibiaoriginsServerKeywordPage, { generateMetadata } from './popular-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsServerKeywordPage />;
}
