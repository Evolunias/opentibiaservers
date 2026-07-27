import TopShadowcoresTibiaKeywordPage, { generateMetadata } from './top-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresTibiaKeywordPage />;
}
