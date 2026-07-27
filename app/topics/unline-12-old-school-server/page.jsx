import Unline12OldSchoolServerKeywordPage, { generateMetadata } from './unline-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12OldSchoolServerKeywordPage />;
}
