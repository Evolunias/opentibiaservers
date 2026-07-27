import NoResetOtmadnessPrivateServerKeywordPage, { generateMetadata } from './no-reset-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessPrivateServerKeywordPage />;
}
