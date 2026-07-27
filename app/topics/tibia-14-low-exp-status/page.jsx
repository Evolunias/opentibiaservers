import Tibia14LowExpStatusKeywordPage, { generateMetadata } from './tibia-14-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpStatusKeywordPage />;
}
