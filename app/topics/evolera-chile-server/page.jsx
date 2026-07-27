import EvoleraChileServerKeywordPage, { generateMetadata } from './evolera-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraChileServerKeywordPage />;
}
