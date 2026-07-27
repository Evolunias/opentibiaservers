import MidhemLauncherKeywordPage, { generateMetadata } from './midhem-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemLauncherKeywordPage />;
}
