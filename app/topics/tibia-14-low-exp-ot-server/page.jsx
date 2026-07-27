import Tibia14LowExpOtServerKeywordPage, { generateMetadata } from './tibia-14-low-exp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpOtServerKeywordPage />;
}
