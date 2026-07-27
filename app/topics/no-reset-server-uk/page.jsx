import NoResetServerUkKeywordPage, { generateMetadata } from './no-reset-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerUkKeywordPage />;
}
