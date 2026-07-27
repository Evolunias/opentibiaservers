import CurrentShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './current-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresOpenTibiaKeywordPage />;
}
