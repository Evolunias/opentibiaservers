import SerenityLauncherKeywordPage, { generateMetadata } from './serenity-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityLauncherKeywordPage />;
}
