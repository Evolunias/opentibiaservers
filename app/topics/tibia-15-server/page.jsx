import Tibia15ServerKeywordPage, { generateMetadata } from './tibia-15-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15ServerKeywordPage />;
}
