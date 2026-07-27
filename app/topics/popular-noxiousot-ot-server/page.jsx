import PopularNoxiousotOtServerKeywordPage, { generateMetadata } from './popular-noxiousot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotOtServerKeywordPage />;
}
