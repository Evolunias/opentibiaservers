import WithActivePlayersLaunchUkKeywordPage, { generateMetadata } from './with-active-players-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersLaunchUkKeywordPage />;
}
