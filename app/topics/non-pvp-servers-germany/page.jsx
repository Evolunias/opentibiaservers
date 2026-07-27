import NonPvpServersGermanyKeywordPage, { generateMetadata } from './non-pvp-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersGermanyKeywordPage />;
}
