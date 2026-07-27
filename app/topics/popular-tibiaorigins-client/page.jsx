import PopularTibiaoriginsClientKeywordPage, { generateMetadata } from './popular-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsClientKeywordPage />;
}
