import NtoStar13CustomMapServerKeywordPage, { generateMetadata } from './nto-star-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13CustomMapServerKeywordPage />;
}
