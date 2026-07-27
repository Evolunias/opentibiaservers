import Tibia11OtsKeywordPage, { generateMetadata } from './tibia-11-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OtsKeywordPage />;
}
