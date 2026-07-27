import OtServersWithPlayersKeywordPage, { generateMetadata } from './ot-servers-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersWithPlayersKeywordPage />;
}
