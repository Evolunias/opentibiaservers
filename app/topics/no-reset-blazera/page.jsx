import NoResetBlazeraKeywordPage, { generateMetadata } from './no-reset-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraKeywordPage />;
}
