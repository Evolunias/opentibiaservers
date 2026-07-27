import TibiaHighExpServerNonPvpKeywordPage, { generateMetadata } from './tibia-high-exp-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerNonPvpKeywordPage />;
}
