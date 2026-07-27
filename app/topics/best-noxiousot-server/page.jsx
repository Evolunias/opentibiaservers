import BestNoxiousotServerKeywordPage, { generateMetadata } from './best-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNoxiousotServerKeywordPage />;
}
