import EvoluniaUkServersKeywordPage, { generateMetadata } from './evolunia-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaUkServersKeywordPage />;
}
