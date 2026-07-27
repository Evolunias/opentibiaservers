import Tibia11NoResetServerListKeywordPage, { generateMetadata } from './tibia-11-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetServerListKeywordPage />;
}
