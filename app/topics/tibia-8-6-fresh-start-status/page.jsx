import Tibia86FreshStartStatusKeywordPage, { generateMetadata } from './tibia-8-6-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86FreshStartStatusKeywordPage />;
}
