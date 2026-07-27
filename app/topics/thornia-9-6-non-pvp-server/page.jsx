import Thornia96NonPvpServerKeywordPage, { generateMetadata } from './thornia-9-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96NonPvpServerKeywordPage />;
}
