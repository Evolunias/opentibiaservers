import Tibia81NoResetServerListKeywordPage, { generateMetadata } from './tibia-8-1-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NoResetServerListKeywordPage />;
}
