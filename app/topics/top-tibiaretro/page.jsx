import TopTibiaretroKeywordPage, { generateMetadata } from './top-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroKeywordPage />;
}
