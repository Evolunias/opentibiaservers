import Tibia80FreshStartStatusKeywordPage, { generateMetadata } from './tibia-8-0-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80FreshStartStatusKeywordPage />;
}
