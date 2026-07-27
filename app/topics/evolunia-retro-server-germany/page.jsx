import EvoluniaRetroServerGermanyKeywordPage, { generateMetadata } from './evolunia-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRetroServerGermanyKeywordPage />;
}
