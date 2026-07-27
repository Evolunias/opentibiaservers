import NoResetServerGermanyKeywordPage, { generateMetadata } from './no-reset-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerGermanyKeywordPage />;
}
