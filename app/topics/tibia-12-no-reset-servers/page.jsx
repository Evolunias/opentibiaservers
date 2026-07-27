import Tibia12NoResetServersKeywordPage, { generateMetadata } from './tibia-12-no-reset-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetServersKeywordPage />;
}
