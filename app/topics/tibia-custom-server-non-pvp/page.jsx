import TibiaCustomServerNonPvpKeywordPage, { generateMetadata } from './tibia-custom-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerNonPvpKeywordPage />;
}
