import Tibia81NoResetClientKeywordPage, { generateMetadata } from './tibia-8-1-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NoResetClientKeywordPage />;
}
