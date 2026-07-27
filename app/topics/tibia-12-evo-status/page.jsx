import Tibia12EvoStatusKeywordPage, { generateMetadata } from './tibia-12-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoStatusKeywordPage />;
}
