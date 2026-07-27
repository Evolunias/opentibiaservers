import Tibia12WithTrainersDownloadKeywordPage, { generateMetadata } from './tibia-12-with-trainers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersDownloadKeywordPage />;
}
