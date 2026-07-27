import HighrateShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './highrate-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresOpenTibiaKeywordPage />;
}
