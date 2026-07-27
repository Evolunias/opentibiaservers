import NoResetServerListPolandKeywordPage, { generateMetadata } from './no-reset-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListPolandKeywordPage />;
}
