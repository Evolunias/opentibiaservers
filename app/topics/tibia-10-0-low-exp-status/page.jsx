import Tibia100LowExpStatusKeywordPage, { generateMetadata } from './tibia-10-0-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100LowExpStatusKeywordPage />;
}
