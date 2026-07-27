import Tibia13LowExpStatusKeywordPage, { generateMetadata } from './tibia-13-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpStatusKeywordPage />;
}
