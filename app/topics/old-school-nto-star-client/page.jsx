import OldSchoolNtoStarClientKeywordPage, { generateMetadata } from './old-school-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarClientKeywordPage />;
}
