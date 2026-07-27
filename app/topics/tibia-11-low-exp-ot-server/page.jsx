import Tibia11LowExpOtServerKeywordPage, { generateMetadata } from './tibia-11-low-exp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpOtServerKeywordPage />;
}
