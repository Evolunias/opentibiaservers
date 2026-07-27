import PvpAlasteraServerKeywordPage, { generateMetadata } from './pvp-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpAlasteraServerKeywordPage />;
}
