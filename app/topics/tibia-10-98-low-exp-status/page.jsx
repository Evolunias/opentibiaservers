import Tibia1098LowExpStatusKeywordPage, { generateMetadata } from './tibia-10-98-low-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098LowExpStatusKeywordPage />;
}
