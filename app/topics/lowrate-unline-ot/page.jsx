import LowrateUnlineOtKeywordPage, { generateMetadata } from './lowrate-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineOtKeywordPage />;
}
