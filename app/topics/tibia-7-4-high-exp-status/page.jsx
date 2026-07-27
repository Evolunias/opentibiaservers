import Tibia74HighExpStatusKeywordPage, { generateMetadata } from './tibia-7-4-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74HighExpStatusKeywordPage />;
}
