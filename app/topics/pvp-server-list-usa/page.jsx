import PvpServerListUsaKeywordPage, { generateMetadata } from './pvp-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListUsaKeywordPage />;
}
