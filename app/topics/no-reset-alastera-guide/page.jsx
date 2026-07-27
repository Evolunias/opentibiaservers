import NoResetAlasteraGuideKeywordPage, { generateMetadata } from './no-reset-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraGuideKeywordPage />;
}
