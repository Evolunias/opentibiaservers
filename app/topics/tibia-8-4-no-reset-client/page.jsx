import Tibia84NoResetClientKeywordPage, { generateMetadata } from './tibia-8-4-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NoResetClientKeywordPage />;
}
