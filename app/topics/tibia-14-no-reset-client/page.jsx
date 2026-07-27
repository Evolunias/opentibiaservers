import Tibia14NoResetClientKeywordPage, { generateMetadata } from './tibia-14-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetClientKeywordPage />;
}
