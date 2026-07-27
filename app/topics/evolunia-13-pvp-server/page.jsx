import Evolunia13PvpServerKeywordPage, { generateMetadata } from './evolunia-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13PvpServerKeywordPage />;
}
