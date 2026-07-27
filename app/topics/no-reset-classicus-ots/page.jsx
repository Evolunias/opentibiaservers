import NoResetClassicusOtsKeywordPage, { generateMetadata } from './no-reset-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusOtsKeywordPage />;
}
