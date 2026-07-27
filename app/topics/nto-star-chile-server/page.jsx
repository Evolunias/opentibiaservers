import NtoStarChileServerKeywordPage, { generateMetadata } from './nto-star-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarChileServerKeywordPage />;
}
