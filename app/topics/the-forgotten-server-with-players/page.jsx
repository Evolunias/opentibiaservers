import TheForgottenServerWithPlayersKeywordPage, { generateMetadata } from './the-forgotten-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerWithPlayersKeywordPage />;
}
