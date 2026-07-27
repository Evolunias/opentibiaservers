import NtoStar11NonPvpServerKeywordPage, { generateMetadata } from './nto-star-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11NonPvpServerKeywordPage />;
}
