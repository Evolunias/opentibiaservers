import Tibia15EvoStatusKeywordPage, { generateMetadata } from './tibia-15-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoStatusKeywordPage />;
}
