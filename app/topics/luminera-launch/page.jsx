import LumineraLaunchKeywordPage, { generateMetadata } from './luminera-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraLaunchKeywordPage />;
}
