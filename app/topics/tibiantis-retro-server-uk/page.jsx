import TibiantisRetroServerUkKeywordPage, { generateMetadata } from './tibiantis-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRetroServerUkKeywordPage />;
}
