import PopularOxygenotOtsKeywordPage, { generateMetadata } from './popular-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotOtsKeywordPage />;
}
