import Tibia80NoResetServersKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetServersKeywordPage />;
}
