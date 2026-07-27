import OfficialShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './official-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresOpenTibiaKeywordPage />;
}
