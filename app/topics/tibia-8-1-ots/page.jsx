import Tibia81OtsKeywordPage, { generateMetadata } from './tibia-8-1-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OtsKeywordPage />;
}
