import Tibia13OtsKeywordPage, { generateMetadata } from './tibia-13-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OtsKeywordPage />;
}
