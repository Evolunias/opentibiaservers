import EvoluniaUsaServerKeywordPage, { generateMetadata } from './evolunia-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaUsaServerKeywordPage />;
}
