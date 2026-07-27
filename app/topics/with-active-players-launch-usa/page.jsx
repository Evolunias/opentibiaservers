import WithActivePlayersLaunchUsaKeywordPage, { generateMetadata } from './with-active-players-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersLaunchUsaKeywordPage />;
}
