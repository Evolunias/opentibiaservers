import ShadowcoresUkServersKeywordPage, { generateMetadata } from './shadowcores-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresUkServersKeywordPage />;
}
