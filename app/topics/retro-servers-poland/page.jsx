import RetroServersPolandKeywordPage, { generateMetadata } from './retro-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersPolandKeywordPage />;
}
