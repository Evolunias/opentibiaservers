import LowExpLaunchArgentinaKeywordPage, { generateMetadata } from './low-exp-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchArgentinaKeywordPage />;
}
