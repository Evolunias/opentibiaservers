import OfficialUnlineOtServerKeywordPage, { generateMetadata } from './official-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineOtServerKeywordPage />;
}
