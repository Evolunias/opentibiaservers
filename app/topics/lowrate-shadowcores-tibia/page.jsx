import LowrateShadowcoresTibiaKeywordPage, { generateMetadata } from './lowrate-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresTibiaKeywordPage />;
}
