import NewArcaniarlLoginKeywordPage, { generateMetadata } from './new-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlLoginKeywordPage />;
}
