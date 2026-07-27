import FreshStartTibiaretroClientKeywordPage, { generateMetadata } from './fresh-start-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaretroClientKeywordPage />;
}
