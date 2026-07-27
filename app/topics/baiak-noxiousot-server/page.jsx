import BaiakNoxiousotServerKeywordPage, { generateMetadata } from './baiak-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakNoxiousotServerKeywordPage />;
}
