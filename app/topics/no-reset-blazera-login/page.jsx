import NoResetBlazeraLoginKeywordPage, { generateMetadata } from './no-reset-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraLoginKeywordPage />;
}
