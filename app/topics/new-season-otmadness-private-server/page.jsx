import NewSeasonOtmadnessPrivateServerKeywordPage, { generateMetadata } from './new-season-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessPrivateServerKeywordPage />;
}
