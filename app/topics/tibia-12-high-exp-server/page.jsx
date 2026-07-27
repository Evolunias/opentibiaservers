import Tibia12HighExpServerKeywordPage, { generateMetadata } from './tibia-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpServerKeywordPage />;
}
