import TibiantisUkServersKeywordPage, { generateMetadata } from './tibiantis-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisUkServersKeywordPage />;
}
