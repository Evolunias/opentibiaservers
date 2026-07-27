import EvoClientBrazilKeywordPage, { generateMetadata } from './evo-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientBrazilKeywordPage />;
}
