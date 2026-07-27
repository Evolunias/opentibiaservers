import Tibia84FreshStartStatusKeywordPage, { generateMetadata } from './tibia-8-4-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84FreshStartStatusKeywordPage />;
}
