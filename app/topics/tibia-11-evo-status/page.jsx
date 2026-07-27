import Tibia11EvoStatusKeywordPage, { generateMetadata } from './tibia-11-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoStatusKeywordPage />;
}
