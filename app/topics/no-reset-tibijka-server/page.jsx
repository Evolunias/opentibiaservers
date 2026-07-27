import NoResetTibijkaServerKeywordPage, { generateMetadata } from './no-reset-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaServerKeywordPage />;
}
