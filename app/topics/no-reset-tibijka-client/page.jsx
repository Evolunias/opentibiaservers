import NoResetTibijkaClientKeywordPage, { generateMetadata } from './no-reset-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaClientKeywordPage />;
}
