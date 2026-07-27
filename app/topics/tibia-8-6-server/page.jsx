import Tibia86ServerKeywordPage, { generateMetadata } from './tibia-8-6-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerKeywordPage />;
}
