import NoResetBlazeraServerKeywordPage, { generateMetadata } from './no-reset-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraServerKeywordPage />;
}
