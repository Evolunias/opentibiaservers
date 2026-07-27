import LowrateYurotsOtServerKeywordPage, { generateMetadata } from './lowrate-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsOtServerKeywordPage />;
}
