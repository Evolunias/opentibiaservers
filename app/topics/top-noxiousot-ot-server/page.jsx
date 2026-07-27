import TopNoxiousotOtServerKeywordPage, { generateMetadata } from './top-noxiousot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotOtServerKeywordPage />;
}
