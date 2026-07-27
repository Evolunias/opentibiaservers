import EvoluniaChileServersKeywordPage, { generateMetadata } from './evolunia-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaChileServersKeywordPage />;
}
