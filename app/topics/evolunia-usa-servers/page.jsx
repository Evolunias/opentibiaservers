import EvoluniaUsaServersKeywordPage, { generateMetadata } from './evolunia-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaUsaServersKeywordPage />;
}
