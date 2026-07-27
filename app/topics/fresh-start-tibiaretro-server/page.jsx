import FreshStartTibiaretroServerKeywordPage, { generateMetadata } from './fresh-start-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaretroServerKeywordPage />;
}
