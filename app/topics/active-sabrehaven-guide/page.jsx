import ActiveSabrehavenGuideKeywordPage, { generateMetadata } from './active-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenGuideKeywordPage />;
}
