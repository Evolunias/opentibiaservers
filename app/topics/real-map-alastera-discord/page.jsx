import RealMapAlasteraDiscordKeywordPage, { generateMetadata } from './real-map-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraDiscordKeywordPage />;
}
