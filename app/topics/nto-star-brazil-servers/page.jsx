import NtoStarBrazilServersKeywordPage, { generateMetadata } from './nto-star-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBrazilServersKeywordPage />;
}
