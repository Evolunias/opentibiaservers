import FreshStartTibiaretroKeywordPage, { generateMetadata } from './fresh-start-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaretroKeywordPage />;
}
