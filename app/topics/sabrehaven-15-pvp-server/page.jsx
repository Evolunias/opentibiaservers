import Sabrehaven15PvpServerKeywordPage, { generateMetadata } from './sabrehaven-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15PvpServerKeywordPage />;
}
