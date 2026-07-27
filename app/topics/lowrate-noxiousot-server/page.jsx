import LowrateNoxiousotServerKeywordPage, { generateMetadata } from './lowrate-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotServerKeywordPage />;
}
