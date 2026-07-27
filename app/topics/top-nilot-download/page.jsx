import TopNilotDownloadKeywordPage, { generateMetadata } from './top-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotDownloadKeywordPage />;
}
