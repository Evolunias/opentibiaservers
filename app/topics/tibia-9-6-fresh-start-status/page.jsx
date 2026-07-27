import Tibia96FreshStartStatusKeywordPage, { generateMetadata } from './tibia-9-6-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96FreshStartStatusKeywordPage />;
}
