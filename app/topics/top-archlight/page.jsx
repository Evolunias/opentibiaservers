import TopArchlightKeywordPage, { generateMetadata } from './top-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightKeywordPage />;
}
