import NtoStar14NonPvpServerKeywordPage, { generateMetadata } from './nto-star-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14NonPvpServerKeywordPage />;
}
