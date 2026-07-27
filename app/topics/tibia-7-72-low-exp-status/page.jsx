import Tibia772LowExpStatusKeywordPage, { generateMetadata } from './tibia-7-72-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772LowExpStatusKeywordPage />;
}
