import Tibia12NoResetClientKeywordPage, { generateMetadata } from './tibia-12-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetClientKeywordPage />;
}
