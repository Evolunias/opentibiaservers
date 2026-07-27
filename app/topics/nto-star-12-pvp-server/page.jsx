import NtoStar12PvpServerKeywordPage, { generateMetadata } from './nto-star-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12PvpServerKeywordPage />;
}
