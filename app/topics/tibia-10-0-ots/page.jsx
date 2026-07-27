import Tibia100OtsKeywordPage, { generateMetadata } from './tibia-10-0-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OtsKeywordPage />;
}
