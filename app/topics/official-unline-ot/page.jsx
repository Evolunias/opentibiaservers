import OfficialUnlineOtKeywordPage, { generateMetadata } from './official-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineOtKeywordPage />;
}
