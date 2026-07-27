import EvoMediviaServerKeywordPage, { generateMetadata } from './evo-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMediviaServerKeywordPage />;
}
