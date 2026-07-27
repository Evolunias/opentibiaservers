import Tibia80HighExpStatusKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpStatusKeywordPage />;
}
