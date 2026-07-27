import OfficialCanobLoginKeywordPage, { generateMetadata } from './official-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobLoginKeywordPage />;
}
