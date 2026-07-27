import Tibia71NoResetServerListKeywordPage, { generateMetadata } from './tibia-7-1-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NoResetServerListKeywordPage />;
}
