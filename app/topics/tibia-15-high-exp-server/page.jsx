import Tibia15HighExpServerKeywordPage, { generateMetadata } from './tibia-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpServerKeywordPage />;
}
