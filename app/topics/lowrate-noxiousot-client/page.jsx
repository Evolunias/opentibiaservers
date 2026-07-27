import LowrateNoxiousotClientKeywordPage, { generateMetadata } from './lowrate-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotClientKeywordPage />;
}
