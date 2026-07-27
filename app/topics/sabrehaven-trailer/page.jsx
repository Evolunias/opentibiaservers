import SabrehavenTrailerKeywordPage, { generateMetadata } from './sabrehaven-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenTrailerKeywordPage />;
}
