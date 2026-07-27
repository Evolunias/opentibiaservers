import NoResetServerListUsaKeywordPage, { generateMetadata } from './no-reset-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListUsaKeywordPage />;
}
