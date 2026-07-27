import NonPvpTibiaPrivateServerUkKeywordPage, { generateMetadata } from './non-pvp-tibia-private-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTibiaPrivateServerUkKeywordPage />;
}
