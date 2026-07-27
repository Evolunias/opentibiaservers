import OfficialDemolidoresServerKeywordPage, { generateMetadata } from './official-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresServerKeywordPage />;
}
