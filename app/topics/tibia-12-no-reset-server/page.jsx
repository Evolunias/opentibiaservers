import Tibia12NoResetServerKeywordPage, { generateMetadata } from './tibia-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetServerKeywordPage />;
}
