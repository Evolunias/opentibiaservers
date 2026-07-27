import NtoStar71CustomMapServerKeywordPage, { generateMetadata } from './nto-star-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar71CustomMapServerKeywordPage />;
}
