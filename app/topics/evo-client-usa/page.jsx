import EvoClientUsaKeywordPage, { generateMetadata } from './evo-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientUsaKeywordPage />;
}
