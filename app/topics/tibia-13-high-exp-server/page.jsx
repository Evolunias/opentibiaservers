import Tibia13HighExpServerKeywordPage, { generateMetadata } from './tibia-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpServerKeywordPage />;
}
