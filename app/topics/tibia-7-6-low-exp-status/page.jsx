import Tibia76LowExpStatusKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpStatusKeywordPage />;
}
