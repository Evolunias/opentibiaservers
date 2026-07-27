import Tibia15FreshStartStatusKeywordPage, { generateMetadata } from './tibia-15-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15FreshStartStatusKeywordPage />;
}
