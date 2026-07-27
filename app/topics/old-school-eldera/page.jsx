import OldSchoolElderaKeywordPage, { generateMetadata } from './old-school-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaKeywordPage />;
}
