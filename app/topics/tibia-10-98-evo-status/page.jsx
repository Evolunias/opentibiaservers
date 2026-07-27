import Tibia1098EvoStatusKeywordPage, { generateMetadata } from './tibia-10-98-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098EvoStatusKeywordPage />;
}
