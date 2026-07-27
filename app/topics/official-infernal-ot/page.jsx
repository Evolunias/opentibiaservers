import OfficialInfernalOtKeywordPage, { generateMetadata } from './official-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialInfernalOtKeywordPage />;
}
