import ActiveSaintsotKeywordPage, { generateMetadata } from './active-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotKeywordPage />;
}
