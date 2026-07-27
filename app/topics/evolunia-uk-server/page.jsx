import EvoluniaUkServerKeywordPage, { generateMetadata } from './evolunia-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaUkServerKeywordPage />;
}
