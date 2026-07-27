import LowExpPlayersOnlineFranceKeywordPage, { generateMetadata } from './low-exp-players-online-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpPlayersOnlineFranceKeywordPage />;
}
