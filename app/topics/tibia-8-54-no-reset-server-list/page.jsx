import Tibia854NoResetServerListKeywordPage, { generateMetadata } from './tibia-8-54-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854NoResetServerListKeywordPage />;
}
