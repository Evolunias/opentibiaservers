import Tibia84OtsKeywordPage, { generateMetadata } from './tibia-8-4-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OtsKeywordPage />;
}
