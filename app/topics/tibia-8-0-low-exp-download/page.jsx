import Tibia80LowExpDownloadKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpDownloadKeywordPage />;
}
