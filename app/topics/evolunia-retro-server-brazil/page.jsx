import EvoluniaRetroServerBrazilKeywordPage, { generateMetadata } from './evolunia-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRetroServerBrazilKeywordPage />;
}
