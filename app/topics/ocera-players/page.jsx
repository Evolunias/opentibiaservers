import OceraPlayersKeywordPage, { generateMetadata } from './ocera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraPlayersKeywordPage />;
}
