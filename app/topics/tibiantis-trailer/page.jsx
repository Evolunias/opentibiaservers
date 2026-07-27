import TibiantisTrailerKeywordPage, { generateMetadata } from './tibiantis-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisTrailerKeywordPage />;
}
