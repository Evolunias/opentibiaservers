import EvoleraPolandServerKeywordPage, { generateMetadata } from './evolera-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPolandServerKeywordPage />;
}
