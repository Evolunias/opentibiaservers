import PopularEvoleraOtsKeywordPage, { generateMetadata } from './popular-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraOtsKeywordPage />;
}
