import OfficialCanobOfficialKeywordPage, { generateMetadata } from './official-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobOfficialKeywordPage />;
}
