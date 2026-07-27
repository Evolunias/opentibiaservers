import OfficialDemolidoresKeywordPage, { generateMetadata } from './official-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresKeywordPage />;
}
