import NewMadnessaliveTibiaKeywordPage, { generateMetadata } from './new-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMadnessaliveTibiaKeywordPage />;
}
