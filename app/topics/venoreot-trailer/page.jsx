import VenoreotTrailerKeywordPage, { generateMetadata } from './venoreot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotTrailerKeywordPage />;
}
