import MediviaTrailerKeywordPage, { generateMetadata } from './medivia-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaTrailerKeywordPage />;
}
