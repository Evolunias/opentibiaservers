import RetroOpenTibiaServerPolandKeywordPage, { generateMetadata } from './retro-open-tibia-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOpenTibiaServerPolandKeywordPage />;
}
