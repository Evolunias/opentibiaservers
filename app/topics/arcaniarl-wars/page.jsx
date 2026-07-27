import ArcaniarlWarsKeywordPage, { generateMetadata } from './arcaniarl-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlWarsKeywordPage />;
}
