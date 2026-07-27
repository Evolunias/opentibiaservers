import TopTibiaretroOtKeywordPage, { generateMetadata } from './top-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroOtKeywordPage />;
}
