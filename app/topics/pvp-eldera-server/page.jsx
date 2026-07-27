import PvpElderaServerKeywordPage, { generateMetadata } from './pvp-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpElderaServerKeywordPage />;
}
