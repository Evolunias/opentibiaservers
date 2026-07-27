import OfficialTibiantisServerKeywordPage, { generateMetadata } from './official-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisServerKeywordPage />;
}
