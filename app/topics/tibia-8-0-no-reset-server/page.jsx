import Tibia80NoResetServerKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetServerKeywordPage />;
}
