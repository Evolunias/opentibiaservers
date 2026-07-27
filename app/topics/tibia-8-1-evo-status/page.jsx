import Tibia81EvoStatusKeywordPage, { generateMetadata } from './tibia-8-1-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81EvoStatusKeywordPage />;
}
