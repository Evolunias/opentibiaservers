import Tibia13NoResetServerListKeywordPage, { generateMetadata } from './tibia-13-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetServerListKeywordPage />;
}
