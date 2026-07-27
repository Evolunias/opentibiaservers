import AlasteraWithActivePlayersServerCanadaKeywordPage, { generateMetadata } from './alastera-with-active-players-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithActivePlayersServerCanadaKeywordPage />;
}
