import PvpTibiaPrivateServerLatinAmericaKeywordPage, { generateMetadata } from './pvp-tibia-private-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerLatinAmericaKeywordPage />;
}
