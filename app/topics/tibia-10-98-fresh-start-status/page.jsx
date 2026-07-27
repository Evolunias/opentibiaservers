import Tibia1098FreshStartStatusKeywordPage, { generateMetadata } from './tibia-10-98-fresh-start-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098FreshStartStatusKeywordPage />;
}
