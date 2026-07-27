import TopTibiaraServerKeywordPage, { generateMetadata } from './top-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraServerKeywordPage />;
}
