import PopularTibiaraOtsKeywordPage, { generateMetadata } from './popular-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraOtsKeywordPage />;
}
