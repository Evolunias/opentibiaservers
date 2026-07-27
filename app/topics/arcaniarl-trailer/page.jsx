import ArcaniarlTrailerKeywordPage, { generateMetadata } from './arcaniarl-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlTrailerKeywordPage />;
}
