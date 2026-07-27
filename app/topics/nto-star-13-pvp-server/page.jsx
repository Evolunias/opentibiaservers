import NtoStar13PvpServerKeywordPage, { generateMetadata } from './nto-star-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13PvpServerKeywordPage />;
}
