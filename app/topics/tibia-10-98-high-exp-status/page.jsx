import Tibia1098HighExpStatusKeywordPage, { generateMetadata } from './tibia-10-98-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098HighExpStatusKeywordPage />;
}
