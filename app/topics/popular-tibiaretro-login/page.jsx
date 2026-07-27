import PopularTibiaretroLoginKeywordPage, { generateMetadata } from './popular-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroLoginKeywordPage />;
}
