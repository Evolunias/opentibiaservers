import NewMadnessaliveServerKeywordPage, { generateMetadata } from './new-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMadnessaliveServerKeywordPage />;
}
