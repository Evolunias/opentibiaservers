import NtoStar11PvpServerKeywordPage, { generateMetadata } from './nto-star-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11PvpServerKeywordPage />;
}
