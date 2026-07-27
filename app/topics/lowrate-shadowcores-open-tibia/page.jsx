import LowrateShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './lowrate-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresOpenTibiaKeywordPage />;
}
