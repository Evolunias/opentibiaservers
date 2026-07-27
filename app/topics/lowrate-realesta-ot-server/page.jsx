import LowrateRealestaOtServerKeywordPage, { generateMetadata } from './lowrate-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaOtServerKeywordPage />;
}
