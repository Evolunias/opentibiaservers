import Unline13PvpServerKeywordPage, { generateMetadata } from './unline-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13PvpServerKeywordPage />;
}
