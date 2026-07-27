import Kasteria96NonPvpServerKeywordPage, { generateMetadata } from './kasteria-9-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96NonPvpServerKeywordPage />;
}
