import PopularShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './popular-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresOpenTibiaKeywordPage />;
}
