import RetroOpenTibiaServerSwedenKeywordPage, { generateMetadata } from './retro-open-tibia-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOpenTibiaServerSwedenKeywordPage />;
}
