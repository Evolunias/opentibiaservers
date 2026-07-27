import OfficialTibiantisClientKeywordPage, { generateMetadata } from './official-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisClientKeywordPage />;
}
