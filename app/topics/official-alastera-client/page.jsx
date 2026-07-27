import OfficialAlasteraClientKeywordPage, { generateMetadata } from './official-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraClientKeywordPage />;
}
