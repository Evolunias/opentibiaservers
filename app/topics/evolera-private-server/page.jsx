import EvoleraPrivateServerKeywordPage, { generateMetadata } from './evolera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPrivateServerKeywordPage />;
}
