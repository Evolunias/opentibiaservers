import OfficialAlasteraKeywordPage, { generateMetadata } from './official-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraKeywordPage />;
}
