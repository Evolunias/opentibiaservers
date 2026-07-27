import Tibia772OtsKeywordPage, { generateMetadata } from './tibia-7-72-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772OtsKeywordPage />;
}
