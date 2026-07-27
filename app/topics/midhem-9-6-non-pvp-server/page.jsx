import Midhem96NonPvpServerKeywordPage, { generateMetadata } from './midhem-9-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96NonPvpServerKeywordPage />;
}
