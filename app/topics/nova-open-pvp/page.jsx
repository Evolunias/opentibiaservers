import NovaOpenPvpKeywordPage, { generateMetadata } from './nova-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaOpenPvpKeywordPage />;
}
