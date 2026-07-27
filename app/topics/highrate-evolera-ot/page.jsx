import HighrateEvoleraOtKeywordPage, { generateMetadata } from './highrate-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraOtKeywordPage />;
}
