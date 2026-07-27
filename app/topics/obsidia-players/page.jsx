import ObsidiaPlayersKeywordPage, { generateMetadata } from './obsidia-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaPlayersKeywordPage />;
}
