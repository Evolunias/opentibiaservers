import LowrateKasteriaOtServerKeywordPage, { generateMetadata } from './lowrate-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaOtServerKeywordPage />;
}
