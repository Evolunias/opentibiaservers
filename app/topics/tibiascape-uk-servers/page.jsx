import TibiascapeUkServersKeywordPage, { generateMetadata } from './tibiascape-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeUkServersKeywordPage />;
}
