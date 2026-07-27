import NoResetGuideUsaKeywordPage, { generateMetadata } from './no-reset-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideUsaKeywordPage />;
}
