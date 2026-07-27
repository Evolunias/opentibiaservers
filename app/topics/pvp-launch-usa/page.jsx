import PvpLaunchUsaKeywordPage, { generateMetadata } from './pvp-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchUsaKeywordPage />;
}
