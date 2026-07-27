import CurrentOtmadnessPrivateServerKeywordPage, { generateMetadata } from './current-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessPrivateServerKeywordPage />;
}
