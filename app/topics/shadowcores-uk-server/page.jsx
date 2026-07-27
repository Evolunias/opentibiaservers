import ShadowcoresUkServerKeywordPage, { generateMetadata } from './shadowcores-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresUkServerKeywordPage />;
}
