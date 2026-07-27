import ArcaniarlLoginKeywordPage, { generateMetadata } from './arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlLoginKeywordPage />;
}
