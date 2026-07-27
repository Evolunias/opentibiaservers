import EvoleraUsaServerKeywordPage, { generateMetadata } from './evolera-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraUsaServerKeywordPage />;
}
