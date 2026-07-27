import MistOfDeathLaunchKeywordPage, { generateMetadata } from './mist-of-death-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathLaunchKeywordPage />;
}
