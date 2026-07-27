import TibiantisRetroServerPolandKeywordPage, { generateMetadata } from './tibiantis-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRetroServerPolandKeywordPage />;
}
