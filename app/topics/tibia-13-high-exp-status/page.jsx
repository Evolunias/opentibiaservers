import Tibia13HighExpStatusKeywordPage, { generateMetadata } from './tibia-13-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpStatusKeywordPage />;
}
