import NtoStar80CustomMapServerKeywordPage, { generateMetadata } from './nto-star-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80CustomMapServerKeywordPage />;
}
