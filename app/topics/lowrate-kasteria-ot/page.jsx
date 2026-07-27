import LowrateKasteriaOtKeywordPage, { generateMetadata } from './lowrate-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaOtKeywordPage />;
}
