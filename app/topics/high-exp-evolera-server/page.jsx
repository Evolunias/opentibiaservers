import HighExpEvoleraServerKeywordPage, { generateMetadata } from './high-exp-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpEvoleraServerKeywordPage />;
}
