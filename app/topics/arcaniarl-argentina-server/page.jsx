import ArcaniarlArgentinaServerKeywordPage, { generateMetadata } from './arcaniarl-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlArgentinaServerKeywordPage />;
}
