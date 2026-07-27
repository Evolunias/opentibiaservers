import NtoStarBrazilServerKeywordPage, { generateMetadata } from './nto-star-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBrazilServerKeywordPage />;
}
