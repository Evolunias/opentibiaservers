import ThorniaEvoServerCanadaKeywordPage, { generateMetadata } from './thornia-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaEvoServerCanadaKeywordPage />;
}
