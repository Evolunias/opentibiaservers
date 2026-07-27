import Tibia84EvoStatusKeywordPage, { generateMetadata } from './tibia-8-4-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoStatusKeywordPage />;
}
