import PvpOpenTibiaServerPolandKeywordPage, { generateMetadata } from './pvp-open-tibia-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOpenTibiaServerPolandKeywordPage />;
}
