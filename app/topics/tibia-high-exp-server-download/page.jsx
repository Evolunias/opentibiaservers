import TibiaHighExpServerDownloadKeywordPage, { generateMetadata } from './tibia-high-exp-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerDownloadKeywordPage />;
}
