import PopularShadowcoresTibiaKeywordPage, { generateMetadata } from './popular-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresTibiaKeywordPage />;
}
