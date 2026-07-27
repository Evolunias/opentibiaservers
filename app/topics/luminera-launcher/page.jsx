import LumineraLauncherKeywordPage, { generateMetadata } from './luminera-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraLauncherKeywordPage />;
}
