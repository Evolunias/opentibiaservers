import ActiveSaintsotServerKeywordPage, { generateMetadata } from './active-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotServerKeywordPage />;
}
