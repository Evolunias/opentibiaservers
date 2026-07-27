import OfficialKasteriaServerKeywordPage, { generateMetadata } from './official-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaServerKeywordPage />;
}
