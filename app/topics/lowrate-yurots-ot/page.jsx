import LowrateYurotsOtKeywordPage, { generateMetadata } from './lowrate-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsOtKeywordPage />;
}
