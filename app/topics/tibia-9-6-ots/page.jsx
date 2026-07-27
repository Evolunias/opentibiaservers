import Tibia96OtsKeywordPage, { generateMetadata } from './tibia-9-6-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OtsKeywordPage />;
}
