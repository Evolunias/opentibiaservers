import Tibia74EvoStatusKeywordPage, { generateMetadata } from './tibia-7-4-evo-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74EvoStatusKeywordPage />;
}
