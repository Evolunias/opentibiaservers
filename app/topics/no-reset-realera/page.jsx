import NoResetRealeraKeywordPage, { generateMetadata } from './no-reset-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraKeywordPage />;
}
