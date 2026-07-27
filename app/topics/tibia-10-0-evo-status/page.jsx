import Tibia100EvoStatusKeywordPage, { generateMetadata } from './tibia-10-0-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoStatusKeywordPage />;
}
