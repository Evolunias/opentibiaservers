import NoResetRealestaClientKeywordPage, { generateMetadata } from './no-reset-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealestaClientKeywordPage />;
}
