import Tibia14NoResetServerKeywordPage, { generateMetadata } from './tibia-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetServerKeywordPage />;
}
