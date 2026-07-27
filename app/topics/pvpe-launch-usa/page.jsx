import PvpeLaunchUsaKeywordPage, { generateMetadata } from './pvpe-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchUsaKeywordPage />;
}
