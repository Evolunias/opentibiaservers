import NewRangerSArcaniDiscordKeywordPage, { generateMetadata } from './new-ranger-s-arcani-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniDiscordKeywordPage />;
}
