import Tibia13FreshStartStatusKeywordPage, { generateMetadata } from './tibia-13-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartStatusKeywordPage />;
}
