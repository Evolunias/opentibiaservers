import Tibia15NoResetServerListKeywordPage, { generateMetadata } from './tibia-15-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetServerListKeywordPage />;
}
