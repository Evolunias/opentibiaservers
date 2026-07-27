import Tibia76ServerKeywordPage, { generateMetadata } from './tibia-7-6-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76ServerKeywordPage />;
}
