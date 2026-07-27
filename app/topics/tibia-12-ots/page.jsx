import Tibia12OtsKeywordPage, { generateMetadata } from './tibia-12-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OtsKeywordPage />;
}
