import NoResetThorniaGuideKeywordPage, { generateMetadata } from './no-reset-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaGuideKeywordPage />;
}
