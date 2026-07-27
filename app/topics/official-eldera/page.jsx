import OfficialElderaKeywordPage, { generateMetadata } from './official-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaKeywordPage />;
}
