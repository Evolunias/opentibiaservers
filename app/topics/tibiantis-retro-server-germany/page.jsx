import TibiantisRetroServerGermanyKeywordPage, { generateMetadata } from './tibiantis-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRetroServerGermanyKeywordPage />;
}
