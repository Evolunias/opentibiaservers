import CustomRangerSArcaniDiscordKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniDiscordKeywordPage />;
}
