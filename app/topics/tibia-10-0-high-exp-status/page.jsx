import Tibia100HighExpStatusKeywordPage, { generateMetadata } from './tibia-10-0-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100HighExpStatusKeywordPage />;
}
