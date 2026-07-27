import Tibia76OtsKeywordPage, { generateMetadata } from './tibia-7-6-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OtsKeywordPage />;
}
