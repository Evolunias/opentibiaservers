import HighrateSabrehavenGuideKeywordPage, { generateMetadata } from './highrate-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenGuideKeywordPage />;
}
