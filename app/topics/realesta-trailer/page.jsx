import RealestaTrailerKeywordPage, { generateMetadata } from './realesta-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaTrailerKeywordPage />;
}
