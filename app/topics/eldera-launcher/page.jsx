import ElderaLauncherKeywordPage, { generateMetadata } from './eldera-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaLauncherKeywordPage />;
}
