import Tibia76FreshStartStatusKeywordPage, { generateMetadata } from './tibia-7-6-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76FreshStartStatusKeywordPage />;
}
