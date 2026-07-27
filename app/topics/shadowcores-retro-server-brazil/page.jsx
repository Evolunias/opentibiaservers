import ShadowcoresRetroServerBrazilKeywordPage, { generateMetadata } from './shadowcores-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresRetroServerBrazilKeywordPage />;
}
