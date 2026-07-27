import NoResetSaintsotLoginKeywordPage, { generateMetadata } from './no-reset-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotLoginKeywordPage />;
}
