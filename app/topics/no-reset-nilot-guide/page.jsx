import NoResetNilotGuideKeywordPage, { generateMetadata } from './no-reset-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotGuideKeywordPage />;
}
