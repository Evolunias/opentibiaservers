import TopTibiaoriginsKeywordPage, { generateMetadata } from './top-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsKeywordPage />;
}
