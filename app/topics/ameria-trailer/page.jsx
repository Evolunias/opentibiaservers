import AmeriaTrailerKeywordPage, { generateMetadata } from './ameria-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaTrailerKeywordPage />;
}
