import Tibia100NoResetServerListKeywordPage, { generateMetadata } from './tibia-10-0-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NoResetServerListKeywordPage />;
}
