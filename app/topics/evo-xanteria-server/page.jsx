import EvoXanteriaServerKeywordPage, { generateMetadata } from './evo-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoXanteriaServerKeywordPage />;
}
