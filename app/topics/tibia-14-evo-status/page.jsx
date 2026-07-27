import Tibia14EvoStatusKeywordPage, { generateMetadata } from './tibia-14-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoStatusKeywordPage />;
}
