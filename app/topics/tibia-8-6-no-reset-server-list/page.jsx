import Tibia86NoResetServerListKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetServerListKeywordPage />;
}
