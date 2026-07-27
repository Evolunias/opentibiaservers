import TopTibiaraClientKeywordPage, { generateMetadata } from './top-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraClientKeywordPage />;
}
