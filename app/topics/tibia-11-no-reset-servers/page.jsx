import Tibia11NoResetServersKeywordPage, { generateMetadata } from './tibia-11-no-reset-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetServersKeywordPage />;
}
