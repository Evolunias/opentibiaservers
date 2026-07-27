import Tibia854LowExpStatusKeywordPage, { generateMetadata } from './tibia-8-54-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854LowExpStatusKeywordPage />;
}
