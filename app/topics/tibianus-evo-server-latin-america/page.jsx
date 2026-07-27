import TibianusEvoServerLatinAmericaKeywordPage, { generateMetadata } from './tibianus-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusEvoServerLatinAmericaKeywordPage />;
}
