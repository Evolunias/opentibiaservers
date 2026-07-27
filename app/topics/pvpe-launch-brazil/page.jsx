import PvpeLaunchBrazilKeywordPage, { generateMetadata } from './pvpe-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchBrazilKeywordPage />;
}
