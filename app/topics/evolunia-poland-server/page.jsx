import EvoluniaPolandServerKeywordPage, { generateMetadata } from './evolunia-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaPolandServerKeywordPage />;
}
