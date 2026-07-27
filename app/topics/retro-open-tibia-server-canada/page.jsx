import RetroOpenTibiaServerCanadaKeywordPage, { generateMetadata } from './retro-open-tibia-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOpenTibiaServerCanadaKeywordPage />;
}
