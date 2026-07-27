import LowrateSabrehavenGuideKeywordPage, { generateMetadata } from './lowrate-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenGuideKeywordPage />;
}
