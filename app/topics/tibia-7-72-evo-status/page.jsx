import Tibia772EvoStatusKeywordPage, { generateMetadata } from './tibia-7-72-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772EvoStatusKeywordPage />;
}
