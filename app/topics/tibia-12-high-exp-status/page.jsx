import Tibia12HighExpStatusKeywordPage, { generateMetadata } from './tibia-12-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpStatusKeywordPage />;
}
