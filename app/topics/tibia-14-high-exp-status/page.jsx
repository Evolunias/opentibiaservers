import Tibia14HighExpStatusKeywordPage, { generateMetadata } from './tibia-14-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14HighExpStatusKeywordPage />;
}
