import NtoStarFunServerKeywordPage, { generateMetadata } from './nto-star-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarFunServerKeywordPage />;
}
