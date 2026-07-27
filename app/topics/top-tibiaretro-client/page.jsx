import TopTibiaretroClientKeywordPage, { generateMetadata } from './top-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroClientKeywordPage />;
}
