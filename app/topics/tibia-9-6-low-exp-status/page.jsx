import Tibia96LowExpStatusKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpStatusKeywordPage />;
}
