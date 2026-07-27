import Tibia11LowExpStatusKeywordPage, { generateMetadata } from './tibia-11-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpStatusKeywordPage />;
}
