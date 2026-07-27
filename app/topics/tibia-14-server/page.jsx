import Tibia14ServerKeywordPage, { generateMetadata } from './tibia-14-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14ServerKeywordPage />;
}
