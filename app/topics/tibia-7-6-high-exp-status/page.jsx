import Tibia76HighExpStatusKeywordPage, { generateMetadata } from './tibia-7-6-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76HighExpStatusKeywordPage />;
}
