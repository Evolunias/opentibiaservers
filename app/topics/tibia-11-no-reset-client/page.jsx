import Tibia11NoResetClientKeywordPage, { generateMetadata } from './tibia-11-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetClientKeywordPage />;
}
