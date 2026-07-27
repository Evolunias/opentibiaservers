import OtservlistOldSchoolKeywordPage, { generateMetadata } from './otservlist-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistOldSchoolKeywordPage />;
}
