import RetroTibiaoriginsServerKeywordPage, { generateMetadata } from './retro-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaoriginsServerKeywordPage />;
}
