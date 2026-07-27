import Unline13NonPvpServerKeywordPage, { generateMetadata } from './unline-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13NonPvpServerKeywordPage />;
}
