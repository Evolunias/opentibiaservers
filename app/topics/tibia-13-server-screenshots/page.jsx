import Tibia13ServerScreenshotsKeywordPage, { generateMetadata } from './tibia-13-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerScreenshotsKeywordPage />;
}
