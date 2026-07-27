import Tibia14NoResetServerListKeywordPage, { generateMetadata } from './tibia-14-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetServerListKeywordPage />;
}
