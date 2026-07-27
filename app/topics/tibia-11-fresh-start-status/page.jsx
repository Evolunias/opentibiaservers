import Tibia11FreshStartStatusKeywordPage, { generateMetadata } from './tibia-11-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartStatusKeywordPage />;
}
