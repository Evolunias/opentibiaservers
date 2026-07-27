import CurrentEvoleraServerKeywordPage, { generateMetadata } from './current-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraServerKeywordPage />;
}
