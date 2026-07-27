import Tibia76EvoStatusKeywordPage, { generateMetadata } from './tibia-7-6-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76EvoStatusKeywordPage />;
}
