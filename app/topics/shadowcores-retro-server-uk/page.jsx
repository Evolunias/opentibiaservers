import ShadowcoresRetroServerUkKeywordPage, { generateMetadata } from './shadowcores-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresRetroServerUkKeywordPage />;
}
