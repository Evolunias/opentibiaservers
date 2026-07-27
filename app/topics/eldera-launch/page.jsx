import ElderaLaunchKeywordPage, { generateMetadata } from './eldera-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaLaunchKeywordPage />;
}
