import AmeriaEvoServerCanadaKeywordPage, { generateMetadata } from './ameria-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaEvoServerCanadaKeywordPage />;
}
