import NoResetServersGermanyKeywordPage, { generateMetadata } from './no-reset-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServersGermanyKeywordPage />;
}
