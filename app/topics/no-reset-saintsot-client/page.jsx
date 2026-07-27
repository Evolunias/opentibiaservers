import NoResetSaintsotClientKeywordPage, { generateMetadata } from './no-reset-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotClientKeywordPage />;
}
