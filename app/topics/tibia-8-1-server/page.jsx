import Tibia81ServerKeywordPage, { generateMetadata } from './tibia-8-1-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81ServerKeywordPage />;
}
