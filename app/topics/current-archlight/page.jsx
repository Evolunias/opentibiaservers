import CurrentArchlightKeywordPage, { generateMetadata } from './current-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightKeywordPage />;
}
