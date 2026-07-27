import Tibia80LowExpStatusKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpStatusKeywordPage />;
}
