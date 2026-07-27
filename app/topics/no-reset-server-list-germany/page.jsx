import NoResetServerListGermanyKeywordPage, { generateMetadata } from './no-reset-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListGermanyKeywordPage />;
}
