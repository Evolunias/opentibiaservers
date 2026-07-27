import NewUnlineOfficialKeywordPage, { generateMetadata } from './new-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineOfficialKeywordPage />;
}
