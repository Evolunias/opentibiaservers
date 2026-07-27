import TibiaCustomServerPvpKeywordPage, { generateMetadata } from './tibia-custom-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerPvpKeywordPage />;
}
