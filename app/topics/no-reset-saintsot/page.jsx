import NoResetSaintsotKeywordPage, { generateMetadata } from './no-reset-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotKeywordPage />;
}
