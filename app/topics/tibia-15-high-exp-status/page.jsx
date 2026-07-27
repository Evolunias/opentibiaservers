import Tibia15HighExpStatusKeywordPage, { generateMetadata } from './tibia-15-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpStatusKeywordPage />;
}
