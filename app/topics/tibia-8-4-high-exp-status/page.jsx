import Tibia84HighExpStatusKeywordPage, { generateMetadata } from './tibia-8-4-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84HighExpStatusKeywordPage />;
}
