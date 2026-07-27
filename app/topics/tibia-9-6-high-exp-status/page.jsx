import Tibia96HighExpStatusKeywordPage, { generateMetadata } from './tibia-9-6-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96HighExpStatusKeywordPage />;
}
