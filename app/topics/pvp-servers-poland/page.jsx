import PvpServersPolandKeywordPage, { generateMetadata } from './pvp-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersPolandKeywordPage />;
}
