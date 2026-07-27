import NtoStar15CustomMapServerKeywordPage, { generateMetadata } from './nto-star-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15CustomMapServerKeywordPage />;
}
