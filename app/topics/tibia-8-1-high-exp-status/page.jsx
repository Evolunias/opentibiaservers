import Tibia81HighExpStatusKeywordPage, { generateMetadata } from './tibia-8-1-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81HighExpStatusKeywordPage />;
}
