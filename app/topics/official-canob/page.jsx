import OfficialCanobKeywordPage, { generateMetadata } from './official-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobKeywordPage />;
}
