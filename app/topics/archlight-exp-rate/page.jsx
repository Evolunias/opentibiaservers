import ArchlightExpRateKeywordPage, { generateMetadata } from './archlight-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightExpRateKeywordPage />;
}
