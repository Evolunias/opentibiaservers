import HighrateEvoleraKeywordPage, { generateMetadata } from './highrate-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraKeywordPage />;
}
