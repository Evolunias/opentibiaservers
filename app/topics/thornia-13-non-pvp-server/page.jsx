import Thornia13NonPvpServerKeywordPage, { generateMetadata } from './thornia-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13NonPvpServerKeywordPage />;
}
