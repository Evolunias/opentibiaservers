import CoxaotSeasonKeywordPage, { generateMetadata } from './coxaot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSeasonKeywordPage />;
}
