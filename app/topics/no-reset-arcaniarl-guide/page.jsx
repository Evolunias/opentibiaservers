import NoResetArcaniarlGuideKeywordPage, { generateMetadata } from './no-reset-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlGuideKeywordPage />;
}
