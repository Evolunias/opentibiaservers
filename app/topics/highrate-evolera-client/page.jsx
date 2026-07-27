import HighrateEvoleraClientKeywordPage, { generateMetadata } from './highrate-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraClientKeywordPage />;
}
