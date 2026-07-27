import TibianusTrailerKeywordPage, { generateMetadata } from './tibianus-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusTrailerKeywordPage />;
}
