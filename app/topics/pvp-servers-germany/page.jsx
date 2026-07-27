import PvpServersGermanyKeywordPage, { generateMetadata } from './pvp-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersGermanyKeywordPage />;
}
