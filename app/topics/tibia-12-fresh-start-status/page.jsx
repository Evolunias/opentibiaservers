import Tibia12FreshStartStatusKeywordPage, { generateMetadata } from './tibia-12-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartStatusKeywordPage />;
}
