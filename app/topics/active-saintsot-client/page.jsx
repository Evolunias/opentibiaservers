import ActiveSaintsotClientKeywordPage, { generateMetadata } from './active-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotClientKeywordPage />;
}
