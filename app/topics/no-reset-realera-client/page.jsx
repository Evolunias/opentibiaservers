import NoResetRealeraClientKeywordPage, { generateMetadata } from './no-reset-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraClientKeywordPage />;
}
