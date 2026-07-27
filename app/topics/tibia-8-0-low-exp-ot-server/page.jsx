import Tibia80LowExpOtServerKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpOtServerKeywordPage />;
}
