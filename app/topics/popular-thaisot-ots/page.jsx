import PopularThaisotOtsKeywordPage, { generateMetadata } from './popular-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotOtsKeywordPage />;
}
