import PvpServersEuropeKeywordPage, { generateMetadata } from './pvp-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersEuropeKeywordPage />;
}
