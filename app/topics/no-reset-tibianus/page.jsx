import NoResetTibianusKeywordPage, { generateMetadata } from './no-reset-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusKeywordPage />;
}
