import Tibia80NoResetServerListKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetServerListKeywordPage />;
}
