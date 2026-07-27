import EvoOtServerArgentinaKeywordPage, { generateMetadata } from './evo-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerArgentinaKeywordPage />;
}
