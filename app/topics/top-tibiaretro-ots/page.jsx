import TopTibiaretroOtsKeywordPage, { generateMetadata } from './top-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroOtsKeywordPage />;
}
