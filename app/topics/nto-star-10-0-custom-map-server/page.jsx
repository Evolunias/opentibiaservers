import NtoStar100CustomMapServerKeywordPage, { generateMetadata } from './nto-star-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100CustomMapServerKeywordPage />;
}
