import OfficialClassickDrakoriaServerKeywordPage, { generateMetadata } from './official-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaServerKeywordPage />;
}
