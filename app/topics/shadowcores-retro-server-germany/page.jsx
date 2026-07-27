import ShadowcoresRetroServerGermanyKeywordPage, { generateMetadata } from './shadowcores-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresRetroServerGermanyKeywordPage />;
}
