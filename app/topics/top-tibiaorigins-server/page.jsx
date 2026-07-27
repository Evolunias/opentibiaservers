import TopTibiaoriginsServerKeywordPage, { generateMetadata } from './top-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsServerKeywordPage />;
}
