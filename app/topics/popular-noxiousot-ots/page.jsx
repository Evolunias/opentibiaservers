import PopularNoxiousotOtsKeywordPage, { generateMetadata } from './popular-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotOtsKeywordPage />;
}
