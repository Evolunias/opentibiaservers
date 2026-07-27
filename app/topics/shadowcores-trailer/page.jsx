import ShadowcoresTrailerKeywordPage, { generateMetadata } from './shadowcores-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresTrailerKeywordPage />;
}
