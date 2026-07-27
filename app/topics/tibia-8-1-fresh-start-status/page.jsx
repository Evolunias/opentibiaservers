import Tibia81FreshStartStatusKeywordPage, { generateMetadata } from './tibia-8-1-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81FreshStartStatusKeywordPage />;
}
