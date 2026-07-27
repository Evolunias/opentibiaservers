import HighrateUnlineOtKeywordPage, { generateMetadata } from './highrate-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineOtKeywordPage />;
}
