import Tibia71EvoStatusKeywordPage, { generateMetadata } from './tibia-7-1-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71EvoStatusKeywordPage />;
}
