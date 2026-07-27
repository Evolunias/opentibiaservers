import MiracleTrailerKeywordPage, { generateMetadata } from './miracle-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleTrailerKeywordPage />;
}
