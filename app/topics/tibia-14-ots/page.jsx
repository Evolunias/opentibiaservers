import Tibia14OtsKeywordPage, { generateMetadata } from './tibia-14-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OtsKeywordPage />;
}
