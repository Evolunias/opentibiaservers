import Unline15PvpServerKeywordPage, { generateMetadata } from './unline-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15PvpServerKeywordPage />;
}
