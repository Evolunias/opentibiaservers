import NoResetImperianicClientKeywordPage, { generateMetadata } from './no-reset-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicClientKeywordPage />;
}
