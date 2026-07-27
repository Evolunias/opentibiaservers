import ActiveEvoleraPrivateServerKeywordPage, { generateMetadata } from './active-evolera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraPrivateServerKeywordPage />;
}
