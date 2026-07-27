import CustomArcaniarlDownloadKeywordPage, { generateMetadata } from './custom-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlDownloadKeywordPage />;
}
