import NewSabrehavenGuideKeywordPage, { generateMetadata } from './new-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenGuideKeywordPage />;
}
