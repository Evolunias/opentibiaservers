import LowExpEvoleraServerKeywordPage, { generateMetadata } from './low-exp-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpEvoleraServerKeywordPage />;
}
