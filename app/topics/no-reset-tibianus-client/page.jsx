import NoResetTibianusClientKeywordPage, { generateMetadata } from './no-reset-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusClientKeywordPage />;
}
