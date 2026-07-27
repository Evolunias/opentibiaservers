import NtoStarTrailerKeywordPage, { generateMetadata } from './nto-star-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarTrailerKeywordPage />;
}
