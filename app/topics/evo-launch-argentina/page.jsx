import EvoLaunchArgentinaKeywordPage, { generateMetadata } from './evo-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchArgentinaKeywordPage />;
}
