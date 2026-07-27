import NepreniaTrailerKeywordPage, { generateMetadata } from './neprenia-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaTrailerKeywordPage />;
}
