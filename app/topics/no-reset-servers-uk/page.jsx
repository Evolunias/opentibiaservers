import NoResetServersUkKeywordPage, { generateMetadata } from './no-reset-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServersUkKeywordPage />;
}
