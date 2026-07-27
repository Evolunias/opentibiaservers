import NoxiousotExpRateKeywordPage, { generateMetadata } from './noxiousot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotExpRateKeywordPage />;
}
