import CustomThorniaDownloadKeywordPage, { generateMetadata } from './custom-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaDownloadKeywordPage />;
}
