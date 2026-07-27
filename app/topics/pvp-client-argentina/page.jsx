import PvpClientArgentinaKeywordPage, { generateMetadata } from './pvp-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientArgentinaKeywordPage />;
}
