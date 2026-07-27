import EvoluniaGermanyServerKeywordPage, { generateMetadata } from './evolunia-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaGermanyServerKeywordPage />;
}
