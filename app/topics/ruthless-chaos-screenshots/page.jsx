import RuthlessChaosScreenshotsKeywordPage, { generateMetadata } from './ruthless-chaos-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosScreenshotsKeywordPage />;
}
