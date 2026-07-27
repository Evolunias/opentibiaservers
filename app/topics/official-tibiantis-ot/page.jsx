import OfficialTibiantisOtKeywordPage, { generateMetadata } from './official-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisOtKeywordPage />;
}
