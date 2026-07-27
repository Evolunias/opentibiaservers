import CoxaotSeasonalServerPolandKeywordPage, { generateMetadata } from './coxaot-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSeasonalServerPolandKeywordPage />;
}
