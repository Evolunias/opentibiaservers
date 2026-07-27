import OfficialImperianicServerKeywordPage, { generateMetadata } from './official-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicServerKeywordPage />;
}
