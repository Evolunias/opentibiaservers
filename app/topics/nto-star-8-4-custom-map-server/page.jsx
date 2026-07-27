import NtoStar84CustomMapServerKeywordPage, { generateMetadata } from './nto-star-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84CustomMapServerKeywordPage />;
}
