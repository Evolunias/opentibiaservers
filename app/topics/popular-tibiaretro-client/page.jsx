import PopularTibiaretroClientKeywordPage, { generateMetadata } from './popular-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroClientKeywordPage />;
}
