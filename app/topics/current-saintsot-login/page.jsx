import CurrentSaintsotLoginKeywordPage, { generateMetadata } from './current-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotLoginKeywordPage />;
}
