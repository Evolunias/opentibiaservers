import EvoSabrehavenServerKeywordPage, { generateMetadata } from './evo-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSabrehavenServerKeywordPage />;
}
