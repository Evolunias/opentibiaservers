import Tibia13LowExpOtServerKeywordPage, { generateMetadata } from './tibia-13-low-exp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpOtServerKeywordPage />;
}
