import TopTibiaoriginsOtKeywordPage, { generateMetadata } from './top-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsOtKeywordPage />;
}
