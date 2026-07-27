import BestSabrehavenGuideKeywordPage, { generateMetadata } from './best-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenGuideKeywordPage />;
}
