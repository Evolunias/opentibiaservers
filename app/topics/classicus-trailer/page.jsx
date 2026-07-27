import ClassicusTrailerKeywordPage, { generateMetadata } from './classicus-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusTrailerKeywordPage />;
}
