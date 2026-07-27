import NtoStar11CustomMapServerKeywordPage, { generateMetadata } from './nto-star-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11CustomMapServerKeywordPage />;
}
