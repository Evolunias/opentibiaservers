import OfficialTibianusOtKeywordPage, { generateMetadata } from './official-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusOtKeywordPage />;
}
