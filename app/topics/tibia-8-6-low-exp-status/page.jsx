import Tibia86LowExpStatusKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpStatusKeywordPage />;
}
