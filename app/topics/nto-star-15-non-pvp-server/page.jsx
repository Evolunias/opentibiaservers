import NtoStar15NonPvpServerKeywordPage, { generateMetadata } from './nto-star-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15NonPvpServerKeywordPage />;
}
