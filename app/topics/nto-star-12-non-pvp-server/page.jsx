import NtoStar12NonPvpServerKeywordPage, { generateMetadata } from './nto-star-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12NonPvpServerKeywordPage />;
}
