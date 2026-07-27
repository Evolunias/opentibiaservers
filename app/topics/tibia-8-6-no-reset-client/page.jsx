import Tibia86NoResetClientKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetClientKeywordPage />;
}
