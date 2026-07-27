import AlasteraTrailerKeywordPage, { generateMetadata } from './alastera-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraTrailerKeywordPage />;
}
