import PvpeServerHighExpKeywordPage, { generateMetadata } from './pvpe-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerHighExpKeywordPage />;
}
