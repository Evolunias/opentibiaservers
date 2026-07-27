import ClassicusBaiakServerGermanyKeywordPage, { generateMetadata } from './classicus-baiak-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusBaiakServerGermanyKeywordPage />;
}
