import Tibia14FreshStartStatusKeywordPage, { generateMetadata } from './tibia-14-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14FreshStartStatusKeywordPage />;
}
