import BestNoxiousotClientKeywordPage, { generateMetadata } from './best-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNoxiousotClientKeywordPage />;
}
