import ThorniaEvoServerEuropeKeywordPage, { generateMetadata } from './thornia-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaEvoServerEuropeKeywordPage />;
}
