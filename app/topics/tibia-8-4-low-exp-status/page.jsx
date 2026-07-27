import Tibia84LowExpStatusKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpStatusKeywordPage />;
}
