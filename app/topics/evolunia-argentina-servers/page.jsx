import EvoluniaArgentinaServersKeywordPage, { generateMetadata } from './evolunia-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaArgentinaServersKeywordPage />;
}
