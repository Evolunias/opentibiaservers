import NoResetLumineraGuideKeywordPage, { generateMetadata } from './no-reset-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraGuideKeywordPage />;
}
