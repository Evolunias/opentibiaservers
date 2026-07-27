import NoResetTibijkaOtsKeywordPage, { generateMetadata } from './no-reset-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaOtsKeywordPage />;
}
