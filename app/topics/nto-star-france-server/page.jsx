import NtoStarFranceServerKeywordPage, { generateMetadata } from './nto-star-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarFranceServerKeywordPage />;
}
