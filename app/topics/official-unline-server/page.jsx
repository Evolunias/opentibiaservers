import OfficialUnlineServerKeywordPage, { generateMetadata } from './official-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineServerKeywordPage />;
}
