import MidhemLaunchKeywordPage, { generateMetadata } from './midhem-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemLaunchKeywordPage />;
}
