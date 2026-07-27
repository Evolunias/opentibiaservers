import EvoluniaChileServerKeywordPage, { generateMetadata } from './evolunia-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaChileServerKeywordPage />;
}
