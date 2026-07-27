import FreshStartLaunchFranceKeywordPage, { generateMetadata } from './fresh-start-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchFranceKeywordPage />;
}
