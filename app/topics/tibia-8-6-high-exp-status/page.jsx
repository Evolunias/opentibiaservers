import Tibia86HighExpStatusKeywordPage, { generateMetadata } from './tibia-8-6-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86HighExpStatusKeywordPage />;
}
