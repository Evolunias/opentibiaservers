import NoResetBlazeraClientKeywordPage, { generateMetadata } from './no-reset-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraClientKeywordPage />;
}
