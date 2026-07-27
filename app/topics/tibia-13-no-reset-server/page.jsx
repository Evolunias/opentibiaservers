import Tibia13NoResetServerKeywordPage, { generateMetadata } from './tibia-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetServerKeywordPage />;
}
