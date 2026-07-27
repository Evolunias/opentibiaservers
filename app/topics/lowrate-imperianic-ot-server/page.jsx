import LowrateImperianicOtServerKeywordPage, { generateMetadata } from './lowrate-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicOtServerKeywordPage />;
}
