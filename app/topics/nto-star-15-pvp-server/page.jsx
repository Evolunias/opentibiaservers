import NtoStar15PvpServerKeywordPage, { generateMetadata } from './nto-star-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15PvpServerKeywordPage />;
}
