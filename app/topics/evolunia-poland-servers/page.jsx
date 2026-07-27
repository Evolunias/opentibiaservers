import EvoluniaPolandServersKeywordPage, { generateMetadata } from './evolunia-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaPolandServersKeywordPage />;
}
