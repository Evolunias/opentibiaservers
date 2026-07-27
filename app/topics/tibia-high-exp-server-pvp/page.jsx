import TibiaHighExpServerPvpKeywordPage, { generateMetadata } from './tibia-high-exp-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerPvpKeywordPage />;
}
