import EvoCarlinotServerKeywordPage, { generateMetadata } from './evo-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCarlinotServerKeywordPage />;
}
