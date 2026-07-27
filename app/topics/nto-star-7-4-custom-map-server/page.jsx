import NtoStar74CustomMapServerKeywordPage, { generateMetadata } from './nto-star-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar74CustomMapServerKeywordPage />;
}
