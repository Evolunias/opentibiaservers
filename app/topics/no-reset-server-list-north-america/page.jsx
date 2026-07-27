import NoResetServerListNorthAmericaKeywordPage, { generateMetadata } from './no-reset-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListNorthAmericaKeywordPage />;
}
