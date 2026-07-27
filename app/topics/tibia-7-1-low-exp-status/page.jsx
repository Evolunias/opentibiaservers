import Tibia71LowExpStatusKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpStatusKeywordPage />;
}
