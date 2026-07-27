import Tibia13NoResetServersKeywordPage, { generateMetadata } from './tibia-13-no-reset-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetServersKeywordPage />;
}
