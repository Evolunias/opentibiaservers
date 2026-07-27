import EvoOtServerBrazilKeywordPage, { generateMetadata } from './evo-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerBrazilKeywordPage />;
}
