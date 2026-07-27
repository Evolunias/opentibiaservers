import CustomNilotDownloadKeywordPage, { generateMetadata } from './custom-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotDownloadKeywordPage />;
}
