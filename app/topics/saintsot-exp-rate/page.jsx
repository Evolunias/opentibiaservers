import SaintsotExpRateKeywordPage, { generateMetadata } from './saintsot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotExpRateKeywordPage />;
}
