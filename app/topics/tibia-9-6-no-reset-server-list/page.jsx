import Tibia96NoResetServerListKeywordPage, { generateMetadata } from './tibia-9-6-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NoResetServerListKeywordPage />;
}
