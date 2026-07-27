import Tibijka11PvpServerKeywordPage, { generateMetadata } from './tibijka-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11PvpServerKeywordPage />;
}
