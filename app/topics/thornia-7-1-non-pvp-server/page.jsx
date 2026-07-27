import Thornia71NonPvpServerKeywordPage, { generateMetadata } from './thornia-7-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71NonPvpServerKeywordPage />;
}
