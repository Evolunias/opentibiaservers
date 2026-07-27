import NoResetTibianusOtsKeywordPage, { generateMetadata } from './no-reset-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusOtsKeywordPage />;
}
