import SerenityLaunchKeywordPage, { generateMetadata } from './serenity-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityLaunchKeywordPage />;
}
