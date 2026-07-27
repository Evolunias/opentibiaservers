import BestInfernalOtTibiaKeywordPage, { generateMetadata } from './best-infernal-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestInfernalOtTibiaKeywordPage />;
}
