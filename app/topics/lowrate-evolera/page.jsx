import LowrateEvoleraKeywordPage, { generateMetadata } from './lowrate-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraKeywordPage />;
}
