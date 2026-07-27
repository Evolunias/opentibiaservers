import Tibia14HighExpServerKeywordPage, { generateMetadata } from './tibia-14-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14HighExpServerKeywordPage />;
}
