import Tibia11HighExpStatusKeywordPage, { generateMetadata } from './tibia-11-high-exp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpStatusKeywordPage />;
}
