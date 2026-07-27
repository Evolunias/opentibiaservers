import NtoStarWarsKeywordPage, { generateMetadata } from './nto-star-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarWarsKeywordPage />;
}
