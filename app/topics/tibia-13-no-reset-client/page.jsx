import Tibia13NoResetClientKeywordPage, { generateMetadata } from './tibia-13-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetClientKeywordPage />;
}
