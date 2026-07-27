import Unline11PvpServerKeywordPage, { generateMetadata } from './unline-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11PvpServerKeywordPage />;
}
