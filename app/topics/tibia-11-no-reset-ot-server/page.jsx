import Tibia11NoResetOtServerKeywordPage, { generateMetadata } from './tibia-11-no-reset-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetOtServerKeywordPage />;
}
