import PopularTibianusOtsKeywordPage, { generateMetadata } from './popular-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusOtsKeywordPage />;
}
