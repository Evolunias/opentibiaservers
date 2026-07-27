import PvpServerArgentinaKeywordPage, { generateMetadata } from './pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerArgentinaKeywordPage />;
}
