import RookgaardTalesSouthAmericaServerKeywordPage, { generateMetadata } from './rookgaard-tales-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSouthAmericaServerKeywordPage />;
}
