import NtoStar81CustomMapServerKeywordPage, { generateMetadata } from './nto-star-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar81CustomMapServerKeywordPage />;
}
