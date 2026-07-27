import BestInfernalOtKeywordPage, { generateMetadata } from './best-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestInfernalOtKeywordPage />;
}
