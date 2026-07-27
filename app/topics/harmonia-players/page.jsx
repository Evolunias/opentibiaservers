import HarmoniaPlayersKeywordPage, { generateMetadata } from './harmonia-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaPlayersKeywordPage />;
}
