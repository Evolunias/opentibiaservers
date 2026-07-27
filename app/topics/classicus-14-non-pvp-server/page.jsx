import Classicus14NonPvpServerKeywordPage, { generateMetadata } from './classicus-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14NonPvpServerKeywordPage />;
}
