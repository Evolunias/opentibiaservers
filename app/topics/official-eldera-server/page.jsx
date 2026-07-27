import OfficialElderaServerKeywordPage, { generateMetadata } from './official-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaServerKeywordPage />;
}
