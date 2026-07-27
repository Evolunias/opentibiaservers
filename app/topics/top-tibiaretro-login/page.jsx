import TopTibiaretroLoginKeywordPage, { generateMetadata } from './top-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroLoginKeywordPage />;
}
