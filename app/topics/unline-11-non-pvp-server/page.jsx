import Unline11NonPvpServerKeywordPage, { generateMetadata } from './unline-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11NonPvpServerKeywordPage />;
}
