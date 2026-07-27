import Tibia80ServerKeywordPage, { generateMetadata } from './tibia-8-0-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80ServerKeywordPage />;
}
