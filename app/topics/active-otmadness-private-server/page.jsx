import ActiveOtmadnessPrivateServerKeywordPage, { generateMetadata } from './active-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessPrivateServerKeywordPage />;
}
