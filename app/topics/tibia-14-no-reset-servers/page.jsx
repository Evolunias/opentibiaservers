import Tibia14NoResetServersKeywordPage, { generateMetadata } from './tibia-14-no-reset-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetServersKeywordPage />;
}
