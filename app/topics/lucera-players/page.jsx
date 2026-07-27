import LuceraPlayersKeywordPage, { generateMetadata } from './lucera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraPlayersKeywordPage />;
}
