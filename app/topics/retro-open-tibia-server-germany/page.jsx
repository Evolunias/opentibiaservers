import RetroOpenTibiaServerGermanyKeywordPage, { generateMetadata } from './retro-open-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOpenTibiaServerGermanyKeywordPage />;
}
