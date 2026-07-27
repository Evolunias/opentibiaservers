import Tibia100NoResetClientKeywordPage, { generateMetadata } from './tibia-10-0-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NoResetClientKeywordPage />;
}
