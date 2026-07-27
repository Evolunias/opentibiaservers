import Tibia80EvoStatusKeywordPage, { generateMetadata } from './tibia-8-0-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoStatusKeywordPage />;
}
