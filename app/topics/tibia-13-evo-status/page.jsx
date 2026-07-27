import Tibia13EvoStatusKeywordPage, { generateMetadata } from './tibia-13-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoStatusKeywordPage />;
}
