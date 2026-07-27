import NtoStar14PvpServerKeywordPage, { generateMetadata } from './nto-star-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14PvpServerKeywordPage />;
}
