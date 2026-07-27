import NilotTrailerKeywordPage, { generateMetadata } from './nilot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotTrailerKeywordPage />;
}
