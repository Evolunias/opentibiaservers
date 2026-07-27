import OfficialNilotOtKeywordPage, { generateMetadata } from './official-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotOtKeywordPage />;
}
