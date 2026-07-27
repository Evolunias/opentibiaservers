import UnlineLauncherKeywordPage, { generateMetadata } from './unline-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineLauncherKeywordPage />;
}
