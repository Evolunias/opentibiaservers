import NoResetSabrehavenGuideKeywordPage, { generateMetadata } from './no-reset-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenGuideKeywordPage />;
}
