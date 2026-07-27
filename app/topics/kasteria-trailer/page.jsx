import KasteriaTrailerKeywordPage, { generateMetadata } from './kasteria-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaTrailerKeywordPage />;
}
