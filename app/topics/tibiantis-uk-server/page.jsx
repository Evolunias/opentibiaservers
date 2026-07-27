import TibiantisUkServerKeywordPage, { generateMetadata } from './tibiantis-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisUkServerKeywordPage />;
}
