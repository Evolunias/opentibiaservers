import BestNonPvpOtServerKeywordPage, { generateMetadata } from './best-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNonPvpOtServerKeywordPage />;
}
