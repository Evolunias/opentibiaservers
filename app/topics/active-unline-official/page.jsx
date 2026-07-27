import ActiveUnlineOfficialKeywordPage, { generateMetadata } from './active-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineOfficialKeywordPage />;
}
