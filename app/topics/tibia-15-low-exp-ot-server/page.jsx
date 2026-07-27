import Tibia15LowExpOtServerKeywordPage, { generateMetadata } from './tibia-15-low-exp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpOtServerKeywordPage />;
}
