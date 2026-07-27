import RetroTibiantisServerKeywordPage, { generateMetadata } from './retro-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiantisServerKeywordPage />;
}
