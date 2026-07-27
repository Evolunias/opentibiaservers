import Tibia80NoResetClientKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetClientKeywordPage />;
}
