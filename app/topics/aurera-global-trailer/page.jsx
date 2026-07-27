import AureraGlobalTrailerKeywordPage, { generateMetadata } from './aurera-global-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalTrailerKeywordPage />;
}
