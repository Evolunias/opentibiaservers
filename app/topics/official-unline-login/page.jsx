import OfficialUnlineLoginKeywordPage, { generateMetadata } from './official-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineLoginKeywordPage />;
}
