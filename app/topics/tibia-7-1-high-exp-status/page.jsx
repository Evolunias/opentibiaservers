import Tibia71HighExpStatusKeywordPage, { generateMetadata } from './tibia-7-1-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71HighExpStatusKeywordPage />;
}
