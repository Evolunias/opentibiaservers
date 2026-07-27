import DoleraPlayersKeywordPage, { generateMetadata } from './dolera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraPlayersKeywordPage />;
}
