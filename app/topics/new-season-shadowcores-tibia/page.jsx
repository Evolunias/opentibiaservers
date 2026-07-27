import NewSeasonShadowcoresTibiaKeywordPage, { generateMetadata } from './new-season-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresTibiaKeywordPage />;
}
