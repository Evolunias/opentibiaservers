import Tibia12LowExpOtServerKeywordPage, { generateMetadata } from './tibia-12-low-exp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpOtServerKeywordPage />;
}
