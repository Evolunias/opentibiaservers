import Tibia772NoResetServerListKeywordPage, { generateMetadata } from './tibia-7-72-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NoResetServerListKeywordPage />;
}
