import LowrateSaintsotClientKeywordPage, { generateMetadata } from './lowrate-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotClientKeywordPage />;
}
