import HighrateEvoleraServerKeywordPage, { generateMetadata } from './highrate-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraServerKeywordPage />;
}
