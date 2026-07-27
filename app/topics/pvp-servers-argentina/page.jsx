import PvpServersArgentinaKeywordPage, { generateMetadata } from './pvp-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersArgentinaKeywordPage />;
}
