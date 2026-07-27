import Tibia74LowExpStatusKeywordPage, { generateMetadata } from './tibia-7-4-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74LowExpStatusKeywordPage />;
}
