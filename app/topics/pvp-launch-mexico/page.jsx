import PvpLaunchMexicoKeywordPage, { generateMetadata } from './pvp-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchMexicoKeywordPage />;
}
