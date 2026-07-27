import OfficialTibiantisKeywordPage, { generateMetadata } from './official-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisKeywordPage />;
}
