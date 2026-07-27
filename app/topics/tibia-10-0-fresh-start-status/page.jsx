import Tibia100FreshStartStatusKeywordPage, { generateMetadata } from './tibia-10-0-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100FreshStartStatusKeywordPage />;
}
