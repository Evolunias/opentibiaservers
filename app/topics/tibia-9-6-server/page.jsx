import Tibia96ServerKeywordPage, { generateMetadata } from './tibia-9-6-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96ServerKeywordPage />;
}
