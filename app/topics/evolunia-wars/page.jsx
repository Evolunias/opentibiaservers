import EvoluniaWarsKeywordPage, { generateMetadata } from './evolunia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaWarsKeywordPage />;
}
