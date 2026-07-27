import EvoClientNorthAmericaKeywordPage, { generateMetadata } from './evo-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientNorthAmericaKeywordPage />;
}
