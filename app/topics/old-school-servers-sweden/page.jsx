import OldSchoolServersSwedenKeywordPage, { generateMetadata } from './old-school-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersSwedenKeywordPage />;
}
