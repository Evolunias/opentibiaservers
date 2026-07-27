import LowrateImperianicOtKeywordPage, { generateMetadata } from './lowrate-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicOtKeywordPage />;
}
