import ActiveSaintsotLoginKeywordPage, { generateMetadata } from './active-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotLoginKeywordPage />;
}
