import Tibia14LowExpServerKeywordPage, { generateMetadata } from './tibia-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpServerKeywordPage />;
}
