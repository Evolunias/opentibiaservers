import NtoStarSouthAmericaServerKeywordPage, { generateMetadata } from './nto-star-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSouthAmericaServerKeywordPage />;
}
