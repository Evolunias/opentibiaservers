import PvpOpenTibiaServerNorthAmericaKeywordPage, { generateMetadata } from './pvp-open-tibia-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOpenTibiaServerNorthAmericaKeywordPage />;
}
