import OriginaltibiaTrailerKeywordPage, { generateMetadata } from './originaltibia-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaTrailerKeywordPage />;
}
