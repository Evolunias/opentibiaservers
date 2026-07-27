import Tibia12NoResetServerListKeywordPage, { generateMetadata } from './tibia-12-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetServerListKeywordPage />;
}
