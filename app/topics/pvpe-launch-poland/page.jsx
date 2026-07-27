import PvpeLaunchPolandKeywordPage, { generateMetadata } from './pvpe-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchPolandKeywordPage />;
}
