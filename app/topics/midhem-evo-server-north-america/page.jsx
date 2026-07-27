import MidhemEvoServerNorthAmericaKeywordPage, { generateMetadata } from './midhem-evo-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemEvoServerNorthAmericaKeywordPage />;
}
