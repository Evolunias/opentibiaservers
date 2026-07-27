import Tibia15NoResetServerKeywordPage, { generateMetadata } from './tibia-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetServerKeywordPage />;
}
