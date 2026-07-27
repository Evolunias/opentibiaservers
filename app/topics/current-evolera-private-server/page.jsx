import CurrentEvoleraPrivateServerKeywordPage, { generateMetadata } from './current-evolera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraPrivateServerKeywordPage />;
}
