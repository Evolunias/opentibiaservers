import RangerSArcaniGuildsKeywordPage, { generateMetadata } from './ranger-s-arcani-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniGuildsKeywordPage />;
}
