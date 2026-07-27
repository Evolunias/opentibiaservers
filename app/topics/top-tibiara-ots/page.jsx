import TopTibiaraOtsKeywordPage, { generateMetadata } from './top-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraOtsKeywordPage />;
}
