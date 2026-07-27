import InfernalOtSeasonKeywordPage, { generateMetadata } from './infernal-ot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtSeasonKeywordPage />;
}
