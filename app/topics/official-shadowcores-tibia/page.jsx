import OfficialShadowcoresTibiaKeywordPage, { generateMetadata } from './official-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresTibiaKeywordPage />;
}
