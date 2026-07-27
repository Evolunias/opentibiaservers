import EvoluniaRetroServerEuropeKeywordPage, { generateMetadata } from './evolunia-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRetroServerEuropeKeywordPage />;
}
